<?php
/**
 * @package Site Template
 * @subpackage Whiteblack
 * @since Whiteblack 1.0
 */


/*

Stan Scates
blr | further

stan@sc8s.com
blrfurther.com

Basic OAuth and caching layer for Seaofclouds' tweet.js, designed
to introduce compatibility with Twitter's v1.1 API.

Version: 1.4
Created: 2013.02.20

https://github.com/seaofclouds/tweet
https://github.com/themattharris/tmhOAuth

 */

if(empty($_POST) && empty($_GET)) { die(); }

class ezTweet {
	/*************************************** config ***************************************/

   // Your Twitter App Consumer Key
	private $consumer_key = 'IztxJcNep01dD7KvkwzPg';

	// Your Twitter App Consumer Secret
	private $consumer_secret = 'xRQF9a2WQzQtAqWIoQtu0uiZZo8YfApTjafNeXlTyg';

	// Your Twitter App Access Token
	private $user_token = '298558518-p8mnKpX3i6G3ziBjESPzXgodSpwZeiaQtnp9sKmT';

	// Your Twitter App Access Token Secret
	private $user_secret = '8znmjSUdB7rS9wEYWqA3l7c576VVM0FWdnRH5IaAvZA';

	// Path to tmhOAuth libraries
	private $lib = './';

	// Enable caching
	private $cache_enabled = false;

	// Cache interval (minutes)
	private $cache_interval = 15;

	// Path to writable cache directory
	private $cache_dir = './';

	// Enable debugging
	private $debug = false;

	/**************************************************************************************/

	public function __construct() {
		// Initialize paths and etc.
		$this->pathify($this->cache_dir);
		$this->pathify($this->lib);
		$this->message = '';

		// Set server-side debug params
		if($this->debug === true) {
			error_reporting(-1);
		} else {
			error_reporting(0);
		}
	}

	public function fetch() {
		echo json_encode(
			array(
				'response' => json_decode($this->getJSON(), true),
				'message' => ($this->debug) ? $this->message : false
			)
		);
	}

	private function getJSON() {
		if($this->cache_enabled === true) {
			$CFID = $this->generateCFID();
			$cache_file = $this->cache_dir.$CFID;

			if(file_exists($cache_file) && (filemtime($cache_file) > (time() - 60 * intval($this->cache_interval)))) {
				return file_get_contents($cache_file, FILE_USE_INCLUDE_PATH);
			} else {

				$JSONraw = $this->getTwitterJSON();
				$JSON = $JSONraw['response'];

				// Don't write a bad cache file if there was a CURL error
				if($JSONraw['errno'] != 0) {
					$this->consoleDebug($JSONraw['error']);
					return $JSON;
				}

				if($this->debug === true) {
					// Check for twitter-side errors
					$pj = json_decode($JSON, true);
					if(isset($pj['errors'])) {
						foreach($pj['errors'] as $error) {
							$message = 'Twitter Error: "'.$error['message'].'", Error Code #'.$error['code'];
							$this->consoleDebug($message);
						}
						return false;
					}
				}

				if(is_writable($this->cache_dir) && $JSONraw) {
					if(file_put_contents($cache_file, $JSON, LOCK_EX) === false) {
						$this->consoleDebug("Error writing cache file");
					}
				} else {
					$this->consoleDebug("Cache directory is not writable");
				}
				return $JSON;
			}
		} else {
			$JSONraw = $this->getTwitterJSON();

			if($this->debug === true) {
				// Check for CURL errors
				if($JSONraw['errno'] != 0) {
					$this->consoleDebug($JSONraw['error']);
				}

				// Check for twitter-side errors
				$pj = json_decode($JSONraw['response'], true);
				if(isset($pj['errors'])) {
					foreach($pj['errors'] as $error) {
						$message = 'Twitter Error: "'.$error['message'].'", Error Code #'.$error['code'];
						$this->consoleDebug($message);
					}
					return false;
				}
			}
			return $JSONraw['response'];
		}
	}

	private function getTwitterJSON() {
		require $this->lib.'tmhOAuth.php';
		require $this->lib.'tmhUtilities.php';

		$tmhOAuth = new tmhOAuth(array(
			'host'                  => (!empty($_POST)) ? $_POST['request']['host'] : $_GET['request']['host'],
			'consumer_key'          => $this->consumer_key,
			'consumer_secret'       => $this->consumer_secret,
			'user_token'            => $this->user_token,
			'user_secret'           => $this->user_secret,
			'curl_ssl_verifypeer'   => false
		));

		$url = (!empty($_POST)) ? $_POST['request']['url'] : $_GET['request']['url'];
		$params = (!empty($_POST)) ? $_POST['request']['parameters'] : $_GET['request']['parameters'];

		$tmhOAuth->request('GET', $tmhOAuth->url($url), $params);
		return $tmhOAuth->response;
	}

	private function generateCFID() {
		// The unique cached filename ID
		return md5(serialize((!empty($_POST)) ? $_POST : $_GET)).'.json';
	}

	private function pathify(&$path) {
		// Ensures our user-specified paths are up to snuff
		$path = realpath($path).'/';
	}

	private function consoleDebug($message) {
		if($this->debug === true) {
			$this->message .= 'tweet.js: '.$message."\n";
		}
	}
}

$ezTweet = new ezTweet;
$ezTweet->fetch();


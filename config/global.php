<?php

return [

	'rss_type' => 'rss2',

	'socials_display' => [

		'twitter' => [
			'link_title' => 'Profil Twitter',
			'img_file'   => 'ico-twitter.svg',
			'img_alt'    => 'Twitter',
		],

		'youtube' => [
			'link_title' => 'Chaine Youtube',
			'img_file'   => 'ico-youtube.svg',
			'img_alt'    => 'Youtube',
		],

		'instagram' => [
			'link_title' => 'Profil Instagram',
			'img_file'   => 'ico-instagram.svg',
			'img_alt'    => 'Instagram',
		],

		'facebook' => [
			'link_title' => 'Page Facebook',
			'img_file'   => 'ico-facebook.svg',
			'img_alt'    => 'Facebook',
		],

		'rss' => [
			'link_title' => 'Flux RSS',
			'img_file'   => 'ico-rss.svg',
			'img_alt'    => 'RSS',
		],

	],

	'socials_sharer_links' => [
		'twitter'   => 'https://twitter.com/intent/tweet?url={url}&text={title}&via={via}',
		'facebook'  => 'https://www.facebook.com/sharer/sharer.php?u={url}',
		'google+'   => 'https://plus.google.com/share?url={url}',
		'pinterest' => 'https://pinterest.com/pin/create/bookmarklet/?media={img}&url={url}&is_video={is_video}&description={title}',
	],

];

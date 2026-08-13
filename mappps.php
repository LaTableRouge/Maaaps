<?php

namespace Mappps;

if (!defined('ABSPATH')) {
    exit;
} // Exit if accessed directly

/**
 * Plugin Name: Mappps
 * Plugin URI: https://github.com/LaTableRouge/Mappps
 * Description: A plugin that displays maps
 * Tags: leaflet, block, openstreetmap, map, maps, map block, store locator
 * Author: latablerouge
 * Author URI: https://mlnop.fr/
 * Requires at least: 6.2
 * Tested up to: 7.1
 * Requires PHP: 8.0
 * Version: 1.7.8
 * Stable tag: 1.7.8
 * Text Domain: mappps
 * Domain Path: /lang
 * License: GPLv2 or later
 */

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version
2 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
with this program. If not, visit: https://www.gnu.org/licenses/

Copyright 2025 Monzilla Media. All rights reserved.
*/

if (!function_exists('get_plugin_data')) {
    require_once ABSPATH . 'wp-admin/includes/plugin.php';
}
define('MPPPS_PATH', plugin_dir_path(__FILE__));
define('MPPPS_URL', plugin_dir_url(__FILE__));
define('MPPPS_BLOCKS_PATH', MPPPS_PATH . 'build/blocks');
define('MPPPS_LANG_PATH', MPPPS_PATH . 'lang');
define('MPPPS_BASE_NAME', basename(dirname(__FILE__)));
define('MPPPS_BASE_FILE', __FILE__);

require_once MPPPS_PATH . 'includes/load-textdomain.php';

/*
* ====== Admin page
* Register page
* Enqueue assets
*/
require_once MPPPS_PATH . 'includes/register-page.php';
require_once MPPPS_PATH . 'includes/enqueue-assets.php';
require_once MPPPS_PATH . 'includes/links.php';

/*
* ====== Blocks
* Register a new block category
* Enqueue react blocks
*/
require_once MPPPS_PATH . 'includes/custom-fields/coordinates.php';
require_once MPPPS_PATH . 'includes/custom-fields/image.php';
require_once MPPPS_PATH . 'includes/blocks/categories-register.php';
require_once MPPPS_PATH . 'includes/blocks/blocks-register.php';

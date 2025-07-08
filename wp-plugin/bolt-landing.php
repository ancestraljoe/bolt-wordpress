<?php
/*
Plugin Name: Bolt Landing Page
Description: Embeds the Bolt React landing page built with Vite into WordPress using a shortcode.
Version: 0.1.0
*/

function bolt_landing_enqueue_assets() {
    $plugin_url = plugin_dir_url(__FILE__);
    $assets_dir = plugin_dir_path(__FILE__) . 'dist/assets';
    foreach (glob($assets_dir . '/*.css') as $css) {
        wp_enqueue_style('bolt-' . basename($css, '.css'), $plugin_url . 'dist/assets/' . basename($css));
    }
    foreach (glob($assets_dir . '/*.js') as $js) {
        wp_enqueue_script('bolt-' . basename($js, '.js'), $plugin_url . 'dist/assets/' . basename($js), [], null, true);
    }
}
add_action('wp_enqueue_scripts', 'bolt_landing_enqueue_assets');

function bolt_landing_shortcode() {
    return '<div id="root"></div>';
}
add_shortcode('bolt_landing', 'bolt_landing_shortcode');

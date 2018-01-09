
define([
    "jquery",
    "selectric",
    "matchHeight"
],
function($) {
    "use strict";

    jQuery(document).ready(function() {
        jQuery(function() {
            jQuery('select').selectric();
        });
        jQuery(".products-grid").each(function(index, element) {
            jQuery(element).find('.product-item-name').matchHeight();
        });

        jQuery(".match-height-items").each(function(index, element) {
            jQuery(element).find('.match-height-item').matchHeight();
        });
    });
});


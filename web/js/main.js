
define([
    "jquery",
    "matchHeight"
],
function($) {
    "use strict";

    // prduct grid match height
    jQuery(document).ready(function() {
        jQuery(".products-grid").each(function(index, element) {
            jQuery(element).find('.product-item-name').matchHeight();
        });

        jQuery(".match-height-items").each(function(index, element) {
            jQuery(element).find('.match-height-item').matchHeight();
        });
    });
});


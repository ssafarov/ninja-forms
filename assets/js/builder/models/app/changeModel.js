/**
 * Model that represents our change data.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */
define( [], function() {
	var model = Backbone.Model.extend( {
		defaults: {
			dashicon: 'admin-generic',
			disabled: false
		}
	} );
	
	return model;
} );
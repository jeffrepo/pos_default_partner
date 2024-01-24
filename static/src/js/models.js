odoo.define('pos_default_partner.models', function (require) {
"use strict";
const { Context } = owl;
var models = require('point_of_sale.models');

// var gui = require('point_of_sale.gui');

var { Gui } = require('point_of_sale.Gui');

var core = require('web.core');
var rpc = require('web.rpc');
var _t = core._t;

let _super_posmodel = models.PosModel.prototype;
models.PosModel = models.PosModel.extend({

    // initialize(attributes) {
    //     _super_posmodel.initialize.apply(this,arguments);
    //     this.token = '';
    //     this.vatRateMapping = {};
    //     console.log('initizalize test')
    //     console.log(this)
    // },

    add_new_order: function(){
        var new_order = _super_posmodel.add_new_order.apply(this);
        new_order.set_client(this.db.get_partner_by_id(this.config.default_partner_id[0]))

        if (this.config.default_invoice == true){
            new_order.set_to_invoice(true);
        }
        return new_order
    }
})

var _super_posorder = models.Order.prototype;
models.Order = models.Order.extend({

    init_from_JSON: function(json) {
      _super_posorder.init_from_JSON.apply(this,arguments);

      if(this.get_client() == null){
          var new_client = this.pos.db.get_partner_by_id(this.pos.config.default_partner_id[0]);
          this.set_client(new_client)
      }

      if (this.pos.config.default_invoice == true){
          this.set_to_invoice(true);
      }

    }
})


});

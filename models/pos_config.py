# -*- encoding: utf-8 -*-

from odoo import models, fields, api, _

class PosConfig(models.Model):
    _inherit = 'pos.config'

    default_partner_id = fields.Many2one('res.partner','Cliente por defecto')
    default_invoice = fields.Boolean('Facturar automaticamente')

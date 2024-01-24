# -*- coding: utf-8 -*-
{
    'name': "Pos default partner",

    'summary': """ Pos default partner  """,

    'description': """
        Pos default partner
    """,

    'author': "JS",
    'website': "",

    'category': 'Uncategorized',
    'version': '0.1',

    'depends': ['point_of_sale'],

    'data': [
        'views/pos_config_views.xml',

    ],

    'assets':{
        'point_of_sale.assets': [
            'pos_default_partner/static/src/js/models.js',
        ],
        # 'web.assets_qweb':[
        #     'pos_ticket_mx/static/src/xml/**/*',
        # ],
    },
    'license': 'LGPL-3',
}

import { Injectable } from "@angular/core";



@Injectable()


export class PaymentService {

    constructor() {

    }

    private total_current_annual_volume(data) {

        return (data.checks_current_vol + data.ach_current_vol + data.wires_current_vol + data.cards_current_vol);
    }

    private total_future_annual_mix(data) {

        return (data.future_check_mix + data.future_ach_mix + data.future_wire_mix + data.future_card_mix);
    }


    private future_current_evaluation(data) {

        return {

            'total_disbursment': {

                'future_check_mix'		        :	data.future_check_mix,
                'future_ach_mix'		        :	data.future_ach_mix,
                'future_wire_mix'		        :	data.future_wire_mix,
                'future_card_mix'		        :	data.future_card_mix,
                'current_check_mix'		        :	Math.round((data.checks_current_vol / this.total_current_annual_volume(data)) * 100) || 0,
                'current_ach_mix'		        :	Math.round((data.ach_current_vol / this.total_current_annual_volume(data)) * 100) || 0,
                'current_wire_mix'		        :	Math.round((data.wires_current_vol / this.total_current_annual_volume(data)) * 100) || 0,
                'current_card_mix'		        :	Math.round((data.cards_current_vol / this.total_current_annual_volume(data)) * 100) || 0,

                'total_current_annual_volume'   :   this.total_current_annual_volume(data),
                'total_future_mix'		        :   this.total_future_annual_mix(data)
            },

            'check': {

                'current_annual_volume' :	data.checks_current_vol,
                'current_avg_cost'		:	data.checks_current_avg_cost,
                'future_avg_cost'		:	data.checks_future_avg_cost,
                'future_annual_volume'	:	(this.total_current_annual_volume(data) * (data.future_check_mix / 100)),
                'total_current_cost'	:	(data.checks_current_vol * data.checks_current_avg_cost),
                'total_future_cost'		:	((this.total_current_annual_volume(data) * (data.future_check_mix / 100)) * data.checks_future_avg_cost)
            },

            'ach' : {

                'current_annual_volume' :	data.checks_current_vol,
                'current_avg_cost'		:	data.checks_current_avg_cost,
                'future_avg_cost'		:	data.checks_future_avg_cost,
                'future_annual_volume'	:	(this.total_current_annual_volume(data) * (data.future_check_mix / 100)),
                'total_current_cost'	:	(data.checks_current_vol * data.checks_current_avg_cost),
                'total_future_cost'		:	((this.total_current_annual_volume(data) * (data.future_check_mix / 100)) * data.checks_future_avg_cost)
            },

            'wire' : {

                'current_annual_volume' :	data.wires_current_vol,
                'current_avg_cost'		:	data.wires_current_avg_cost,
                'future_avg_cost'		:	data.wires_current_avg_cost,
                'future_annual_volume'	:	(this.total_current_annual_volume(data) * (data.future_wire_mix / 100)),
                'total_current_cost'	:	(data.wires_current_vol + data.wires_current_avg_cost),
                'total_future_cost'		:	((this.total_current_annual_volume(data) * (data.future_wire_mix / 100)) + data.wires_current_avg_cost)
            },

            'card' : {

                'current_annual_volume' :	data.cards_current_vol,
                'future_annual_volume'	:	(this.total_current_annual_volume(data) * (data.future_card_mix / 100)),
                'current_avg_cost'		:	data.card_avg_cost,
                'future_avg_cost'		:	data.card_avg_cost,
                'transaction_size'		: 	data.avg_trsn_size,
                'revenue_share_rates'	: 	data.card_rev_share_rate,
                'total_current_cost'	:	(data.cards_current_vol * data.card_avg_cost),
                'total_future_cost'		:	((this.total_current_annual_volume(data) * (data.future_card_mix / 100)) * data.card_avg_cost)
            }
        }
    }

    private revenue_share(data, type) {

        if(type=='CURRENT') {
            return ( ( data.card.current_annual_volume * data.card.transaction_size) * (data.card.revenue_share_rates / 100 ) );
        }

        return ( ( data.card.future_annual_volume * data.card.transaction_size) * (data.card.revenue_share_rates / 100 ) );
    }

    private total_cost(data, type) {

        if(type=='CURRENT') {
            return ( data.check.total_current_cost + data.ach.total_current_cost + data.wire.total_current_cost +data.card.total_current_cost );
        }

        return ( data.check.total_future_cost + data.ach.total_future_cost + data.wire.total_future_cost +data.card.total_future_cost );

    }


    generateFinancialData(inputs, callback) {

        let data = this.future_current_evaluation(inputs);

        data['final_total'] = {

            'total_current_cost'	:	this.total_cost(data, 'CURRENT'),
            'total_future_cost'		:	this.total_cost(data, 'FUTURE'),
            'current_avg_trsn_charge':	(this.total_cost(data, 'CURRENT') / this.total_current_annual_volume(data)),
            'future_avg_trsn_charge':	(this.total_cost(data, 'FUTURE') / this.total_current_annual_volume(data)),

            'total_annual_saving'	:	(this.total_cost(data, 'CURRENT') - this.total_cost(data, 'FUTURE')),
            'current_revenue_share'	:	this.revenue_share(data, 'CURRENT'),
            'future_revenue_share'	:   this.revenue_share(data, 'FUTURE'),
            'total_revenue_share'	:	(this.revenue_share(data, 'FUTURE') - this.revenue_share(data, 'CURRENT')),

            'annual_fnancial_impact':	((this.total_cost(data, 'CURRENT') - this.total_cost(data, 'FUTURE')) + (this.revenue_share(data, 'FUTURE') - this.revenue_share(data, 'CURRENT')))

        };

        callback( data );
    }
    



}




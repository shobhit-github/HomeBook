export class Payment {

    payment: object = new Object({
        checks_current_vol:"",
        ach_current_vol:"",
        wires_current_vol:"",
        cards_current_vol:"",

        future_check_mix:25,
        future_ach_mix:25,
        future_wire_mix:25,
        future_card_mix:25,

        checks_current_avg_cost:"0.00",
        ach_current_avg_cost:"0.00",
        wire_current_avg_cost:"0.00",
        card_current_avg_cost:"0.00"
    });


}

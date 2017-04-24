import { Injectable } from "@angular/core";



@Injectable()


export class PaymentService {



    totalCurrentAnnualVolume(data) {

        return (data.checks_current_vol + data.ach_current_vol + data.wires_current_vol + data.cards_current_vol);
    }

    totalFutureAnnualMix(data) {

        return (data.future_check_mix + data.future_ach_mix + data.future_wire_mix + data.future_card_mix);
    }

    currentCheckMix(data) {

        return Math.round((data.checks_current_vol / this.totalCurrentAnnualVolume(data)) * 100) || 0;
    }

    currentAchMix(data) {

        return Math.round((data.ach_current_vol / this.totalCurrentAnnualVolume(data)) * 100) || 0;
    }

    currentWireMix(data) {

        return Math.round((data.wires_current_vol / this.totalCurrentAnnualVolume(data)) * 100) || 0;
    }

    currentCardMix(data) {

        return Math.round((data.cards_current_vol / this.totalCurrentAnnualVolume(data)) * 100) || 0;
    }


}


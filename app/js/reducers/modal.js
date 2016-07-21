import { OPEN_MODAL, CLOSE_MODAL } from '../constants/ActionTypes'
import * as modalFunctions from '../storeFunctions/modal'
import { INITIAL_STATE } from '../core'

export default function modal(state = INITIAL_STATE.get('modal'), action) {
    switch (action.type) {
        case OPEN_MODAL:
            return modalFunctions.openModal(state, action.modalId);

        case CLOSE_MODAL:
            return modalFunctions.closeModal(state);

        default:
            return state
    }
}
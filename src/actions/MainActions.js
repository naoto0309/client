
//-----------------------------------------------------------------------------
//	Action
//-----------------------------------------------------------------------------
export const LOGOUT_COMPLETED			= Symbol('LOGOUT_COMPLETED');

//-----------------------------------------------------------------------------
//	Action Creator
//-----------------------------------------------------------------------------
export function logoutCompleted() {
	return {
		type: LOGOUT_COMPLETED,
	}
}

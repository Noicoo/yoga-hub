import userSlice from './slice';
import * as userOperations from './operations';
import * as userSelectors from './selectors';

export const userActions = userSlice.actions;
export default userSlice.reducer;
export { userOperations, userSelectors };

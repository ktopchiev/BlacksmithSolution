import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

interface ApiError {
    status: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any
}

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
        if (isRejectedWithValue(action)) {
            const errorPayload = action.payload as ApiError

            switch (errorPayload.status) {
                case 404:
                    toast.warning('Not Found', { position: "bottom-right" })

                    break;
                case 400:
                    toast.error('Bad Request', { position: "bottom-right" })
                    break;
                case 500:
                    toast.error('Internal Server Error', { position: "bottom-right" })
                    break;
                default:
                    break;
            }
        }

        return next(action)
    }
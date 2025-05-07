import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
import { Slide, toast, ToastOptions } from 'react-toastify'

interface ApiError {
    status: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any
}

const toastStyles: ToastOptions = {
    position: "bottom-right",
    theme: "dark",
    transition: Slide,
}

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
    (_api: MiddlewareAPI) => (next) => (action) => {
        // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
        if (isRejectedWithValue(action)) {
            const errorPayload = action.payload as ApiError

            switch (errorPayload.status) {
                case 404:
                    toast.warning('Not Found', toastStyles)
                    break;
                case 400:
                    toast.error('Bad Request', toastStyles)
                    break;
                case 500:
                    toast.error('Internal Server Error', toastStyles)
                    break;
                default:
                    break;
            }
        }

        return next(action)
    }
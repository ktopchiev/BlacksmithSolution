import { Pagination } from '@mui/material'
import { setItemsParams } from '../../../App/state/items/itemsSlice'
import { useAppDispatch } from '../../../App/state/store';

interface Props {
    totalPages: number;
    currentPageNumber: number;
}

function ItemsPagination({ totalPages, currentPageNumber }: Props) {
    const dispatch = useAppDispatch();

    return (
        <Pagination
            size="small"
            sx={{
                "& .MuiPaginationItem-root": {
                    color: "black",
                    backgroundColor: "rgb(239, 209, 120)",
                    "&:hover": {
                        backgroundColor: "sienna",
                    },
                },
                "& .Mui-selected": {
                    backgroundColor: "#423030",
                    color: "white",
                },
            }}
            count={totalPages}
            page={currentPageNumber}
            onChange={(event, value) => dispatch(setItemsParams({ CurrentPageNumber: value }))}
        />
    )
}

export default ItemsPagination
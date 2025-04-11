import { FormControl, MenuItem, Select } from '@mui/material'
import { setSearchParams } from '../../../App/state/items/itemsSlice'
import { useAppDispatch } from '../../../App/state/store';

interface Props {
    orderBy: string
}

function SortSelect({ orderBy }: Props) {
    const dispatch = useAppDispatch();

    const sortOptions = [
        { title: "Price: Low - High", value: "priceAsc" },
        { title: "Price: High - Low", value: "priceDesc" },
        { title: "Alphabetically: A - Z", value: "alphaAsc" },
        { title: "Alphabetically: Z - A", value: "alphaDesc" },
        { title: "Rating: Low - High", value: "ratingAsc" },
        { title: "Rating: High - Low", value: "ratingDesc" }
    ];

    return (
        <FormControl size="small">
            <Select
                labelId="sort-select-label"
                id="sort-select"
                variant="outlined"
                value={orderBy}
                label="Sort"
                onChange={(event) => dispatch(setSearchParams({ OrderBy: event.target.value }))}
                size="small"
                sx={{
                    backgroundColor: "rgb(239, 209, 120)",
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgb(239, 209, 120)",
                        boxShadow: "rgb(239, 209, 120) 1px 0 10px"
                    }
                }}
            >
                {sortOptions.map(option =>
                    <MenuItem
                        key={option.value}
                        value={option.value}
                    >
                        {option.title}
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export default SortSelect
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Paper, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { setSearchParams } from "../../../App/state/items/itemsSlice";
import { useDispatch } from "react-redux";

interface Props {
    type: string;
    options?: string[];
}

export default function ItemsFilter({ type, options }: Props) {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState<string[]>([]);

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {

        let checkedOptions: string[] = [];

        if (!event.target.checked) {
            checkedOptions = filters.filter(o => o !== event.target.name);
        } else {
            checkedOptions = [...filters, event.target.name];
        }

        setFilters(checkedOptions);
        dispatch(setSearchParams({ [type]: checkedOptions.join(",") }));
    }

    return (
        <>
            <Paper sx={{ mb: 2, ".MuiPaper-root": { backgroundColor: "rgb(239, 209, 120)" } }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">{type}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            {options?.map(option =>
                                <FormControlLabel control={
                                    <Checkbox name={option} onChange={handleCheck} />
                                }
                                    label={option}
                                    key={option} />)}
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </>
    )
}
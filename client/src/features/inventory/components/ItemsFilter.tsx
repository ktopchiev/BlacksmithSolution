import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Paper, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface Props {
    title: string;
    data?: string[];
}

export default function ItemsFilter({ title, data }: Props) {
    return (
        <>
            <Paper sx={{ mb: 2, ".MuiPaper-root": { backgroundColor: "rgb(239, 209, 120)" } }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">{title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            {data?.map(item =>
                                <FormControlLabel control={<Checkbox />} label={item} />)}
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </>
    )
}
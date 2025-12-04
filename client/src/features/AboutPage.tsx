import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { SyntheticEvent, useState } from 'react';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
        transform: 'rotate(90deg)',
    },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function createData(
    frontEnd: string,
    backEnd: string,
    devOps: string,
) {
    return { frontEnd, backEnd, devOps };
}

const rows = [
    createData('React', 'ASP.NET Core', 'PostgreSQL (Supabase)'),
    createData('Redux Toolkit', 'Entity Framework', 'Azure App Service'),
    createData('RTK Query', 'Clean Architecture', 'GitHub Actions'),
    createData('Material UI', 'JWT Auth', 'CI/CD Pipelines'),
];

export default function AboutPage() {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <Container>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography component="span">🛡️ Blacksmith E-commerce Web App</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Blacksmith is a full-stack, clean architecture web application designed as an e-commerce platform.
                        The backend is built with ASP.NET Core, while the frontend is developed using React with Redux Toolkit and RTK Query.
                        The application is connected to a PostgreSQL database hosted on Supabase,
                        and the entire project is deployed using Azure App Service with GitHub Actions for CI/CD.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography component="span">Note</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This project was built as a learning exercise to practice:
                        <ul>
                            <li>RTK Query for data fetching and caching</li>

                            <li>Clean Architecture principles for maintainable code</li>
                            <li>Azure deployment using GitHub Actions</li>
                        </ul>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography component="span">🚀 Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>🔐 User authentication with JWT</li>
                            <li>🛒 Product catalog and item management</li>
                            <li>📦 Clean separation of concerns using Clean Architecture</li>
                            <li>🌐 Real-time data handling with RTK Query</li>
                            <li>🎨 UI with Material UI</li>
                            <li>☁️ Deployment via Azure App Service</li>
                            <li>🔄 Continuous deployment with GitHub Actions</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography component="span">🔐 Test User Credentials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To test the app functionality without registering a new account, use the following credentials:

                        <p>Username: admin</p>
                        <p>Password: Pa$$w0rd</p>
                        <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                            ⚠️ These credentials are for testing purposes only.
                        </Typography>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography component="span">🛠️ Tech Stack</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 450 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Front-End</TableCell>
                                    <TableCell align="center">Back-End</TableCell>
                                    <TableCell align="center">DevOps</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.frontEnd}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{row.frontEnd}</TableCell>
                                        <TableCell align="center">{row.backEnd}</TableCell>
                                        <TableCell align="center">{row.devOps}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography component="span">☁️ Deployment (CI/CD)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>Deployment is fully automated using GitHub Actions and Azure App Service.</p>
                        <h3 style={{ fontWeight: 'bold' }}>🚀 Workflow Overview</h3>
                        <p>✅ On every push to the main branch, the pipeline:</p>
                        <ol>
                            <li>
                                <p style={{ fontWeight: 'bold' }}>🏗️ Builds the frontend</p>
                                <p>Runs
                                    <span className={"commandText"}>
                                        npm run build
                                    </span>
                                    inside the <span className={"commandText"}>client/</span> folder.
                                </p>
                            </li>
                            <li>
                                <p style={{ fontWeight: 'bold' }}>⚙️ Publishes the backend</p>
                                <p>Uses
                                    <span className={"commandText"}>
                                        dotnet publish
                                    </span>
                                    to prepare the ASP.NET Core app.
                                </p>
                            </li>
                            <li>
                                <p style={{ fontWeight: 'bold' }}>☁️ Deploys to Azure</p>
                                <p>Pushes the published output using the
                                    <span className={"commandText"}>
                                        azure/webapps-deploy
                                    </span>
                                    action.
                                </p>
                            </li>
                            <li>
                                <p style={{ fontWeight: 'bold' }}>🛢️ Database</p>
                                <p> Uses either Supabase PostgreSQL or Azure Database for PostgreSQL.</p>
                            </li>
                        </ol>
                        <p style={{ fontWeight: 'bold' }}>📄 GitHub Actions Workflow File:</p>
                        <span className={"commandText"}>
                            .github/workflows/azure-webapp.yml
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                    <Typography component="span">📁 Project Structure</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>BlacksmithSolution/ │ ├── Blacksmith.Core # Domain and Application interfaces</p>

                        <p>├── Blacksmith.Infrastructure # Data access layer, repositories, DB context</p>

                        <p>├── Blacksmith.UI # API (ASP.NET) + middleware</p>

                        <p>├── client/ # React frontend app</p>

                        <p>└── .github/workflows/ # GitHub Actions for CI/CD</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                    <Typography component="span">📌 TODO / Improvements</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>✅ Add registration & user roles</li>
                            <li>⏳ Admin dashboard</li>
                            <li>⏳ Shopping cart and checkout</li>
                            <li>⏳ Unit and integration tests</li>
                            <li>⏳ Responsive UI</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container >
    )
}

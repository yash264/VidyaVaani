"use client";
import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Gauge } from '@mui/x-charts/Gauge';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";


function Model() {

    const [preperation_level, setPreperationLevel] = useState(0);
    const [study_hours, setStudyHours] = useState(0);
    const [sleep_hours, setSleepHours] = useState(0);
    const [revision_frequency, setRevisionFrequency] = useState(0);
    const [exam_stress_level, setExamStressLevel] = useState(0);
    const [performance_scores, setPerformanceScores] = useState(0);
    const [values, setValues] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ study: false, sleep: false });


    axios.defaults.withCredentials = true;

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);

        try {
            const response = await axios.post('https://vidyavaaniserver.onrender.com/predict',
                {
                    preperation_level: preperation_level,
                    study_hours: study_hours,
                    sleep_hours: sleep_hours,
                    revision_frequency: revision_frequency,
                    exam_stress_level: exam_stress_level
                }
            );
            setPerformanceScores(response.data.performance_scores);
            setValues(response.data.recommendation[0]);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleInputChange = (event, setValue, field) => {
        let value = event.target.value;

        let numericValue = Number(value);

        if (numericValue < 0 || numericValue > 16 || isNaN(numericValue)) {
            setError((prev) => ({ ...prev, [field]: true }));
        } else {
            setError((prev) => ({ ...prev, [field]: false }));
        }

        setValue(numericValue);
    };

    return (
        <>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 text-center gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">

                                <h1 className="text-4xl font-bold m-8 text-gray-900 sm:text-5xl dark:text-white">
                                    Predict the
                                    <strong className="text-indigo-600"> Score </strong>
                                </h1>

                                <Box
                                    component="form"
                                    sx={{ "& .MuiTextField-root": { m: 2, width: '30ch' } }}
                                >
                                    <div>

                                        <FormControl sx={{ m: 2, minWidth: 320 }}>
                                            <InputLabel id="demo-simple-select-helper-label">Preperation Level</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                label="Preperation Level"
                                                onChange={(e) => setPreperationLevel(e.target.value)}
                                            >
                                                <MenuItem value="">
                                                    <em>Choose</em>
                                                </MenuItem>
                                                <MenuItem value={1} onChange={(e) => setPreperationLevel(e.target.value)}>Have to Study</MenuItem>
                                                <MenuItem value={2} onChange={(e) => setPreperationLevel(e.target.value)}>Moderate</MenuItem>
                                                <MenuItem value={3} onChange={(e) => setPreperationLevel(e.target.value)}>Well Prepared</MenuItem>
                                            </Select>
                                            <FormHelperText>Enter your exam Preperation Level</FormHelperText>
                                        </FormControl>

                                        <TextField
                                            type="number"
                                            helperText={error.study ? "Range of Human studing vary from 0-16 hrs" : "Enter your Study Hours"}
                                            error={error.study}
                                            id="demo-helper-text-aligned"
                                            label="Study Hours"
                                            onChange={(e) => handleInputChange(e, setStudyHours, "study")}
                                        />
                                        <TextField
                                            type="number"
                                            helperText={error.sleep ? "Range of Human sleeping vary from 0-16 hrs" : "Enter your Sleeping Hours"}
                                            error={error.sleep}
                                            id="demo-helper-text-aligned"
                                            label="Sleep Hours"
                                            onChange={(e) => handleInputChange(e, setSleepHours, "sleep")}
                                        />

                                        <FormControl sx={{ m: 1.5, minWidth: 260 }}>
                                            <InputLabel id="demo-simple-select-helper-label">Revision Frequency</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                label="Revision Frequency"
                                                onChange={(e) => setRevisionFrequency(e.target.value)}
                                            >
                                                <MenuItem value="">
                                                    <em>Choose</em>
                                                </MenuItem>
                                                <MenuItem value={1} onChange={(e) => setRevisionFrequency(e.target.value)}>Once in a week</MenuItem>
                                                <MenuItem value={2} onChange={(e) => setRevisionFrequency(e.target.value)}>Twice a week</MenuItem>
                                                <MenuItem value={3} onChange={(e) => setRevisionFrequency(e.target.value)}>Thrice a week</MenuItem>
                                                <MenuItem value={4} onChange={(e) => setRevisionFrequency(e.target.value)}>4 Days</MenuItem>
                                                <MenuItem value={5} onChange={(e) => setRevisionFrequency(e.target.value)}>5 Days</MenuItem>
                                                <MenuItem value={6} onChange={(e) => setRevisionFrequency(e.target.value)}>6 Days</MenuItem>
                                                <MenuItem value={7} onChange={(e) => setRevisionFrequency(e.target.value)}>EveryDay</MenuItem>
                                            </Select>
                                            <FormHelperText>Enter your Revision Frequency</FormHelperText>
                                        </FormControl>

                                        <FormControl sx={{ m: 1.5, minWidth: 260 }}>
                                            <InputLabel id="demo-simple-select-helper-label">Exam Stress Level</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                label="Exam Stress Level"
                                                onChange={(e) => setExamStressLevel(e.target.value)}
                                            >
                                                <MenuItem value="">
                                                    <em>Choose</em>
                                                </MenuItem>
                                                <MenuItem value={1} onChange={(e) => setExamStressLevel(e.target.value)}>One</MenuItem>
                                                <MenuItem value={2} onChange={(e) => setExamStressLevel(e.target.value)}>Two</MenuItem>
                                                <MenuItem value={3} onChange={(e) => setExamStressLevel(e.target.value)}>Three</MenuItem>
                                                <MenuItem value={4} onChange={(e) => setExamStressLevel(e.target.value)}>Four</MenuItem>
                                                <MenuItem value={5} onChange={(e) => setExamStressLevel(e.target.value)}>Five</MenuItem>
                                            </Select>
                                            <FormHelperText>Enter Exam Stress Level</FormHelperText>
                                        </FormControl>

                                        {
                                            loading === false ?
                                                <Stack
                                                    justifyContent="center"
                                                    alignItems="center"
                                                >
                                                    <Button
                                                        variant="outlined"
                                                        color="success"
                                                        sx={{
                                                            width: '50ch',
                                                            '&:hover': {
                                                                backgroundColor: 'green',
                                                                color: 'white',
                                                                borderColor: 'green'
                                                            }
                                                        }}
                                                        onClick={handleSubmit}>
                                                        Check Score
                                                    </Button>
                                                </Stack>
                                                :
                                                <Box
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    sx={{ display: 'flex' }}
                                                >
                                                    <CircularProgress />
                                                </Box>
                                        }

                                    </div>
                                </Box>

                            </div>
                        </div>

                        <div>
                            <Typography gutterBottom
                                sx={{ color: 'text.primary', fontSize: 14, fontWeight: 'bold' }}>
                                Performance Analysis
                            </Typography>

                            <Stack
                                direction={{ xs: 'column', md: 'row', }}
                                spacing={{ xs: 1, md: 3 }}
                                justifyContent="center"
                                alignItems="center">
                                <Gauge width={150} height={150}
                                    value={performance_scores == null ? 0 : performance_scores} />
                            </Stack>

                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>

                                    <Typography gutterBottom
                                        sx={{ color: 'text.primary', fontSize: 14, fontWeight: 'bold', display: 'inline', textAlign: 'left' }}>
                                        Reccomendation: &nbsp;
                                    </Typography>
                                    <Typography variant="body2" gutterBottom sx={{ display: 'inline' }}>
                                        {values == null ? "" : values.tag}.
                                        <br />
                                        {values == null ? "" : values.suggest}
                                    </Typography>
                                    <br />

                                    <Typography gutterBottom
                                        sx={{ color: 'text.primary', fontSize: 14, fontWeight: 'bold', display: 'inline' }}>
                                        Motivation: &nbsp;
                                    </Typography>
                                    <Typography variant="body2" gutterBottom sx={{ display: 'inline' }}>
                                        {values == null ? "" : values.motivate}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Model;
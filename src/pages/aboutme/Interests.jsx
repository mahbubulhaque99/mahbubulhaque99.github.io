// Date: 02/18/2021
// Author: Mahbubul Haque
// Description: This is the Interests component of the about me page.
// ========================================================================================================================
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

const Interests = () => {
    const theme = useTheme();
    const isMobileScreens = useMediaQuery("(max-width: 600px)");

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <Box
                sx={{
                    border: `1px solid ${theme.palette.grey[450]}`,
                    borderRadius: "0.5rem",
                    padding: isMobileScreens ? "0.5rem" : "1rem",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        color: theme.palette.text.secondary,
                        mb: "1rem",
                    }}
                >
                    Web Development
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: theme.palette.text.secondary, fontWeight: 400 }}
                >
                    Website paves the way to show your work to the world. I want to 
                    use my creativity and expertise to build websites that serve
                    people to make their life easier.
                </Typography>
            </Box>

            <Box
                sx={{
                    border: `1px solid ${theme.palette.grey[450]}`,
                    borderRadius: "0.5rem",
                    padding: isMobileScreens ? "0.5rem" : "1rem",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        color: theme.palette.text.secondary,
                        mb: "1rem",
                    }}
                >
                    Artificial  Intelligence
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: theme.palette.text.secondary, fontWeight: 400 }}
                >
                When I was in class 9-10, I was fascinated with the idea of having
                a robot which can help my daily works as well as being a friend. Now it seems
                like a step forward due to the advancement of AI. I want to be a part of this
                and integrate AI in my daily life and works.
                </Typography>
            </Box>

            <Box
                sx={{
                    border: `1px solid ${theme.palette.grey[450]}`,
                    borderRadius: "0.5rem",
                    padding: isMobileScreens ? "0.5rem" : "1rem",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        color: theme.palette.text.secondary,
                        mb: "1rem",
                    }}
                >
                    Research
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: theme.palette.text.secondary, fontWeight: 400 }}
                >
                    <span className="about-highlight-text">Bioinformatics</span>, {" "}
                    <span className="about-highlight-text">Physics</span>, {" "}
                    <span className="about-highlight-text">Biology</span>, {" "}
                    <span className="about-highlight-text">History</span>, {" "}
                    and many more subjects. Though our <i>stay</i> in this world is short,
                    I think there is ample time to explore some of these topics which can help us to understand the mystery of the universe.
                </Typography>
            </Box>
        </Box>
    );
};

export default Interests;
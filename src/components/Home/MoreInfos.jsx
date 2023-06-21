import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import * as React from "react";

export default function MoreInfos() {
  return (
    <Container
      sx={{
        marginTop: "15rem",
        marginBottom: "2rem",
      }}>
      <Typography
        sx={{
          fontSize: { xl: "90px", md: "70px", sm: "50px", xs: "22px" },
          background: `linear-gradient(to right, #90CAF9, #E722E6)`,
          backgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
          textAlign: "center",
        }}>
        More Infos
      </Typography>
      <Accordion sx={{
        marginTop: "5rem"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography
            sx={{
              fontSize: "18px",
            }}>
            What are the risks?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#dadada",
            }}>
            The main risk associated with cryptocurrencies is volatility. "Due
            to being something very new, there is a strong price fluctuation in
            the short term. You cannot determine the exact path that the
            investment will take, but when looking at a longer time horizon,
            this risk diminishes," explains Fabricio. Another risk is that of
            financial pyramids: many investors end up falling into scams with
            promises of quick gains.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography
            sx={{
              fontSize: "18px",
            }}>
            How much does it cost to invest?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#dadada",
            }}>
            The prices vary depending on the type of investment and the
            institution involved. You don't need to buy a whole unit of the
            currency. It is possible to invest in a fraction of a bitcoin, for
            example. The minimum investment amount depends on the brokerage or
            exchange - usually around $ 5. In other words, you can start with a
            small amount and gradually increase your investment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <Typography
            sx={{
              fontSize: "18px",
            }}>
            What is the minimum timeframe?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#dadada",
            }}>
            The director of Mercado Bitcoin believes that a good strategy should
            be planned for a minimum period of at least two years. This is
            because the impact of volatility on the asset's price tends to
            decrease over time. It is recommended to think in the medium or long
            term and invest gradually.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <Typography
            sx={{
              fontSize: "18px",
            }}>
            Are there any transaction fees associated with cryptocurrency
            transfers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#dadada",
            }}>
            Yes, most cryptocurrencies have transaction fees associated with
            their transfers. These fees are typically paid to miners who
            validate and include the transactions in the blockchain. The fee
            amount varies depending on network congestion, transaction size, and
            the cryptocurrency being used.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <Typography
            sx={{
              fontSize: "18px",
            }}>
            What are the potential risks of participating in an Initial Coin Offering (ICO)?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#dadada",
            }}>
            Participating in an ICO carries certain risks. These include the possibility of investing in a fraudulent or unsuccessful project, as ICOs are not regulated in the same way as traditional securities offerings. It's important to conduct thorough research, assess the credibility of the project team, review the whitepaper, and understand the risks involved before participating in an ICO.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

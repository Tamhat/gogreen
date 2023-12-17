import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQS() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body1" color="initial" fontWeight="medium">
            How do I install a toilet bidet attachment?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="initial">
            Installing our bidet attachments is a breeze! Follow the
            step-by-step instructions provided in the manual for a quick and
            easy installation. No special tools are required, and you'll be
            enjoying the benefits in no time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body1" color="initial" fontWeight="medium">
            Are bidet attachments compatible with all toilets?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="initial">
              Yes, our bidet attachments are designed to be compatible with most
              standard toilets. The adjustable features make it versatile and
              suitable for various toilet shapes and sizes. If you have any
              concerns, feel free to reach out to our customer support for
              assistance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body1" color="initial" fontWeight="medium">
            How does the bidet attachment improve hygiene?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="initial">
              Our bidet attachments use gentle water sprays for effective
              cleansing, promoting better personal hygiene compared to
              traditional toilet paper. The adjustable water pressure and nozzle
              position ensure a customized and comfortable cleaning experience
              for every user.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body1" color="initial" fontWeight="medium">
            Is the installation process reversible?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="initial">
              Absolutely! If you ever decide to remove the bidet attachment, the
              process is reversible, and it won't damage your toilet. You can
              easily uninstall it and revert to your previous setup without any
              permanent changes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body1" color="initial" fontWeight="medium">
            What maintenance is required for the bidet attachment?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="initial">
              Maintenance is minimal. Regular cleaning with mild soap and water
              is sufficient. The bidet attachment is designed with hygiene in
              mind, incorporating features like self-cleaning nozzles. For
              detailed care instructions, refer to the maintenance section in
              the user manual.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

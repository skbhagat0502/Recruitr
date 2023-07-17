import Heading from "./Heading";
import RightPart from "./RightPart";
import TemplateCard from "./TemplateCard";
import Templates from "./TemplateArray";
import Button from "@mui/material/Button";
function CreateTemplate(Template) {
  return <TemplateCard key={Template.id} img={Template.img} />;
}
function Resume() {
  return (
    <RightPart>
      <Heading>Select format you want</Heading>
      <div className="w-full flex flex-col justify-between h-full items-start">
        <div className="flex flex-wrap justify-start items-start gap-6">
          {Templates.map(CreateTemplate)}
        </div>
        <span>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#232323",
              "&:hover": {
                backgroundColor: "#000",
              },
              position: "relative",
              bottom: "0",
              marginTop: "30px",
            }}
          >
            Download
          </Button>
          <p>
            Note: for better & best resume fill your all details in Resume
            Builder.
          </p>
        </span>
      </div>
    </RightPart>
  );
}
export default Resume;

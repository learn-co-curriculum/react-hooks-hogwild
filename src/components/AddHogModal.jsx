import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Modal,
} from "semantic-ui-react";
import React from "react";
import AddHogForm from "./AddHogForm";

const AddHogModal = ({ addHog }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button color="blue" style={{ margin: "1em" }}>
            Add Hog
          </Button>
        }
      >
        <ModalHeader>Add A New Hog!</ModalHeader>
        <ModalContent>
          <ModalDescription className="">
            <Header>Use the form below to create a new hog</Header>
            <AddHogForm addHog={addHog} setOpen={setOpen} />
          </ModalDescription>
        </ModalContent>
        <ModalActions>
          <Button color="red" onClick={() => setOpen(false)}>
            Close
          </Button>
        </ModalActions>
      </Modal>
    </>
  );
};

export default AddHogModal;

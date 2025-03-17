import { Button, IconButton, Input, Stack, Textarea } from "@chakra-ui/react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Field } from "../components/ui/field";
import { useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useProductStore } from "../../store/product";

const UpdateModal = ({ _id, name, description, price, image }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    _id,
    name,
    description,
    price,
    image,
  });
  const { updateProduct } = useProductStore();

  const handleUpdateProduct = async () => {
    const updated = await updateProduct(updatedProduct);
    if (updated) {
      console.log("succeed", updated);
      //close the model
      setIsOpen(false);
    } else {
      console.log("error");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <DialogRoot
      initialFocusEl={() => ref.current}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <IconButton>
          <FaEdit />
        </IconButton>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Product detail update</DialogTitle>
        </DialogHeader>
        <DialogBody pb="4">
          <Stack gap="4">
            <Field label="Name">
              <Input
                value={updatedProduct.name}
                name="name"
                onChange={handleInputChange}
              />
            </Field>
            <Field label="Price">
              <Input
                value={updatedProduct.price}
                name="price"
                onChange={handleInputChange}
              />
            </Field>
            <Field label="Description">
              <Textarea
                value={updatedProduct.description}
                name="description"
                onChange={handleInputChange}
              />
            </Field>
            <Field label="Image">
              <Input
                value={updatedProduct.image}
                name="image"
                onChange={handleInputChange}
              />
            </Field>
          </Stack>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </DialogActionTrigger>
          <Button onClick={handleUpdateProduct}>Update</Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};

export default UpdateModal;

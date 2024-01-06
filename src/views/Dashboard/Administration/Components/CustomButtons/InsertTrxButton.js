import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Button, useDisclosure, Box, FormLabel, Input, Select, Textarea, Stack, InputGroup, InputLeftAddon
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { TransactionNames } from "../../../../../toolkit/TransactionNames";
import { v4 as uuidv4 } from 'uuid';
export function InsertTrxButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [trxGUID, setTrxGUID] = useState('');
  const [trxName, setTrxName] = useState('TestTransaction');
  const [trxDate, setTrxDate] = useState(new Date().toISOString().split('T')[0]);
  const [trxStatus, setTrxStatus] = useState('Pending');
  const [trxJsonData, setTrxJsonData] = useState('');
  const [policyGUID, setPolicyGUID] = useState('');

  const handleSubmit = () => {
    console.log({ trxGUID, trxName, trxDate, trxStatus, trxJsonData, policyGUID});

    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setTrxGUID(uuidv4());
    }
  }, [isOpen]);

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<AddIcon />}
      >
        Insert Transaction
      </Button>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Transaction Fields</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="24px">

              <Box>
                <InputGroup>
                  <InputLeftAddon children="GUID" fontWeight="bold"/>
                  <Input
                    id="trxGUID"
                    value={trxGUID}
                    isDisabled
                  />
                </InputGroup>
              </Box>

              <Box>
                <InputGroup>
                  <InputLeftAddon children="Policy" fontWeight="bold"/>
                  <Input
                    id="policyGUID"
                    value={policyGUID}
                    onChange={(e) => setPolicyGUID(e.target.value)}
                  />
                </InputGroup>
              </Box>

              <Box>
                <InputGroup>
                  <InputLeftAddon children="Name" fontWeight="bold"/>
                    <Select
                      value={trxName}
                      onChange={(e) => setTrxName(e.target.value)}
                    >
                      {TransactionNames.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </Select>
                </InputGroup>
              </Box>

              <Box>
                <InputGroup>
                  <InputLeftAddon children="Date" fontWeight="bold"/>
                    <Input
                      id="trxDate"
                      placeholder=""
                      type="date"
                      value={trxDate}
                      onChange={(e) => setTrxDate(e.target.value)}
                    />
                </InputGroup>
              </Box>

            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              onClick={handleSubmit}
              colorScheme="blue"
            >
              Insert
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

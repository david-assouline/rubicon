import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Input,
  Select,
  Stack,
  InputGroup,
  InputLeftAddon
} from "@chakra-ui/react";

import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { TransactionNames } from "../../../../../toolkit/TransactionNames";
import { v4 as uuidv4 } from 'uuid';
import {
  AnniversaryFields,
  IssuePolicyFields,
  PremiumNoticeFields
} from "../Transactions/FieldsMapping";
export function InsertTrxButton(props) {
  const { policyGUID, setIsLoading, onActionComplete } = props;
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [trxGUID, setTrxGUID] = useState('');
  const [trxName, setTrxName] = useState('');
  const [trxDate, setTrxDate] = useState(new Date().toISOString().split('T')[0]);
  const [trxStatus, setTrxStatus] = useState('Pending');
  const [trxJsonData, setTrxJsonData] = useState('');

  // TRANSACTION FIELDS
  const [formData, setFormData] = useState({});

  const transactionFieldComponents = {
    "Issue Policy": IssuePolicyFields,
    "Premium Notice": PremiumNoticeFields,
    "Anniversary": AnniversaryFields
  };

  const updateData = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  // TRANSACTION FIELDS

  const handleSubmit = () => {
    onClose();
    props.setIsLoading(true);

    const data = {
      trxGUID: trxGUID,
      policyGUID: policyGUID,
      trxName: trxName,
      trxDate: trxDate,
      trxStatus: trxStatus,
      trxJsonData: trxJsonData,
    };

    fetch('https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev/api/transactions/createapplication?action=insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (props.onActionComplete) {
          props.onActionComplete();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      })
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
          <ModalHeader>Insert Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="24px">

              <Box>
                <InputGroup>
                  <InputLeftAddon children="Policy" fontWeight="bold"/>
                  <Input
                    id="policyGUID"
                    value={policyGUID}
                    isDisabled
                  />
                </InputGroup>
              </Box>

              <Box>
                <InputGroup>
                  <InputLeftAddon children="GUID" fontWeight="bold"/>
                  <Input
                    id="trxGUID"
                    value={'Auto-Generated'}
                    isDisabled
                  />
                </InputGroup>
              </Box>

              <Box>
                <InputGroup>
                  <InputLeftAddon children="Transaction" fontWeight="bold"/>
                    <Select
                      value={trxName}
                      onChange={(e) => setTrxName(e.target.value)}
                    >
                      <option value="" disabled>Select transaction...</option>

                      {TransactionNames.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </Select>
                </InputGroup>
              </Box>
              {transactionFieldComponents[trxName] ? React.createElement(transactionFieldComponents[trxName], {
                data: formData,
                updateData: updateData
              }) : null}
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

      {/*<Modal isOpen={isOpen} onClose={onClose}>*/}
      {/*  <ModalOverlay />*/}
      {/*  <ModalContent>*/}
      {/*    <ModalHeader>Transaction Fields</ModalHeader>*/}
      {/*    <ModalCloseButton />*/}
      {/*    <ModalBody>*/}
      {/*      <Stack spacing="24px">*/}

      {/*        <Box>*/}
      {/*          <InputGroup>*/}
      {/*            <InputLeftAddon children="Policy" fontWeight="bold"/>*/}
      {/*            <Input*/}
      {/*              id="policyGUID"*/}
      {/*              value={policyGUID}*/}
      {/*              isDisabled*/}
      {/*            />*/}
      {/*          </InputGroup>*/}
      {/*        </Box>*/}

      {/*        <Box>*/}
      {/*          <InputGroup>*/}
      {/*            <InputLeftAddon children="Name" fontWeight="bold"/>*/}
      {/*              <Select*/}
      {/*                value={trxName}*/}
      {/*                onChange={(e) => setTrxName(e.target.value)}*/}
      {/*              >*/}
      {/*                {TransactionNames.map((option, index) => (*/}
      {/*                  <option key={index} value={option}>{option}</option>*/}
      {/*                ))}*/}
      {/*              </Select>*/}
      {/*          </InputGroup>*/}
      {/*        </Box>*/}

      {/*        <Box>*/}
      {/*          <InputGroup>*/}
      {/*            <InputLeftAddon children="Date" fontWeight="bold"/>*/}
      {/*              <Input*/}
      {/*                id="trxDate"*/}
      {/*                placeholder=""*/}
      {/*                type="date"*/}
      {/*                value={trxDate}*/}
      {/*                onChange={(e) => setTrxDate(e.target.value)}*/}
      {/*              />*/}
      {/*          </InputGroup>*/}
      {/*        </Box>*/}

      {/*        <Box>*/}
      {/*          <InputGroup>*/}
      {/*            <InputLeftAddon children="GUID" fontWeight="bold"/>*/}
      {/*            <Input*/}
      {/*              id="trxGUID"*/}
      {/*              value={"Auto-Generated"}*/}
      {/*              isDisabled*/}
      {/*            />*/}
      {/*          </InputGroup>*/}
      {/*        </Box>*/}

      {/*      </Stack>*/}
      {/*    </ModalBody>*/}

      {/*    <ModalFooter>*/}
      {/*      <Button*/}
      {/*        colorScheme="blue"*/}
      {/*        variant="outline"*/}
      {/*        mr={3}*/}
      {/*        onClick={onClose}*/}
      {/*      >*/}
      {/*        Close*/}
      {/*      </Button>*/}
      {/*      <Button*/}
      {/*        onClick={handleSubmit}*/}
      {/*        colorScheme="blue"*/}
      {/*      >*/}
      {/*        Insert*/}
      {/*      </Button>*/}
      {/*    </ModalFooter>*/}
      {/*  </ModalContent>*/}
      {/*</Modal>*/}
    </>
  )
}

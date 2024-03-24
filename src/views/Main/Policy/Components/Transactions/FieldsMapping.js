import { Box, Input, InputGroup, InputLeftAddon, Stack } from "@chakra-ui/react";

export const IssuePolicyFields = ({ data, updateData }) => (
  <Stack spacing="24px">

    <Box>
      <InputGroup>
        <InputLeftAddon children="Effective Date" fontWeight="bold"/>
        <Input
          id="effectiveDate"
          placeholder=""
          type="date"
          value={data.effectiveDate || ''}
          onChange={(e) => updateData('effectiveDate', e.target.value)}
        />
      </InputGroup>
    </Box>

    <Box>
      <InputGroup>
        <InputLeftAddon children="Issue Date" fontWeight="bold"/>
        <Input
          id="issueDate"
          placeholder=""
          type="date"
          value={data.issueDate || ''}
          onChange={(e) => updateData('issueDate', e.target.value)}
        />
      </InputGroup>
    </Box>
  </Stack>
);

export const PremiumNoticeFields = () => (
  <Box>
    {/* Fields specific to Withdrawal */}
  </Box>
);

export const AnniversaryFields = () => (
  <Box>
    {/* Fields specific to Withdrawal */}
  </Box>
);
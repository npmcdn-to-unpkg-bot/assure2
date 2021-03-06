// Define App config settings
export const API_BASE_URL          = 'https://magellan.ammatech.com.au/rest/Assure_Dev_Service';
export const API_UTILITY_URL       = 'https://magellan.ammatech.com.au/rest/Assure_Dev_Utility';

// Individual Main Services
export const API_ENTITY_URL        = `${API_BASE_URL}/EntityService`;
export const API_RFID_MONITOR_URL  = `${API_BASE_URL}/RfidMonitorService`;
export const API_RFID_READER_URL   = `${API_BASE_URL}/RfidReaderService`;
export const API_USER_PROFILE_URL  = `${API_BASE_URL}/UserProfileService`;

// Individual Utility Services
export const API_RFID_READER_TYPE_URL   = `${API_UTILITY_URL}/getRfidReaderType`;
export const API_USER_TYPE_URL          = `${API_UTILITY_URL}/getUserType`;
export const API_USER_STATUS_URL        = `${API_UTILITY_URL}/getUserStatus`;

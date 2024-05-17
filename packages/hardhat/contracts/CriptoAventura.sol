// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract CriptoAventura is ERC721, ERC721Enumerable {
    uint256 public constant maxSupply = 1000000;
    uint256 private counter;
    mapping(uint256 => bool) private _tokenExists;

   	struct CertificateInfo {
        string name;
        string dateEnd;
        address student;
        uint8 level;
    }

    mapping(uint256 => CertificateInfo) tokenInfo;

    constructor() ERC721("CriptoAventura", "CRAVLA") {
        counter = 0;
    }

    function mint(
        string memory name,
        string memory dateEnd,
        uint8 level
    ) external {
        require(counter < maxSupply, "No more CriptoAventura LATAM certificates available");
        require(bytes(name).length > 0, "Name must not be empty");
        require(bytes(dateEnd).length > 0, "Date end must not be empty");
        require(level > 0, "Level must be greater than zero");

        CertificateInfo memory certificateInfo = CertificateInfo(name, dateEnd, msg.sender, level);
        tokenInfo[counter] = certificateInfo;
        _tokenExists[counter] = true; // Mark the token as existing

        _safeMint(msg.sender, counter);
        counter++; // Increment counter
    }

	function tokenIdToString(uint256 value) internal pure returns (string memory) {
		// Convert uint256 to string
		if (value == 0) {
			return "0";
		}
		uint256 temp = value;
		uint256 digits;
		while (temp != 0) {
			digits++;
			temp /= 10;
		}
		bytes memory buffer = new bytes(digits);
		while (value != 0) {
			digits -= 1;
			buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
			value /= 10;
		}
		return string(buffer);
	}

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_tokenExists[tokenId], "Token ID does not exist");

        CertificateInfo memory certificateInfo = tokenInfo[tokenId];

         string memory jsonURI = string(
            Base64.encode(
                abi.encodePacked(
                    '{ "name": "Cripto Aventura LATAM Certificate #',
                    tokenIdToString(tokenId),
                    '", "description": "CryptoAventura LATAM Certificates are given to students that end a course in CryptoAventura LATAM web page. by Women Biz", "attributes": [{ "name" : "',
                    certificateInfo.name,
                    '", "dateEnd": "',
                    certificateInfo.dateEnd,
                    '", "level": "',
                    certificateInfo.level,
                    '", "student": "',
                    certificateInfo.student,
                    '", "by": "Women Biz"}]}'
                )
            )
        );

        return string(abi.encodePacked("data:application/json;base64,", jsonURI));
    }

    // Function to convert address to string
    function addressToString(address _address) internal pure returns (string memory) {
        bytes32 _bytes = bytes32(uint256(uint160(_address)));
        bytes memory HEX = "0123456789abcdef";
        bytes memory _string = new bytes(42);
        _string[0] = "0";
        _string[1] = "x";
        for (uint256 i = 0; i < 20; i++) {
            _string[2 + i * 2] = HEX[uint8(_bytes[i + 12] >> 4)];
            _string[3 + i * 2] = HEX[uint8(_bytes[i + 12] & 0x0f)];
        }
        return string(_string);
    }

    // The following functions are overrides required by Solidity.
    function _update(address to, uint256 tokenId, address auth) internal override(ERC721, ERC721Enumerable) returns (address) {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value) internal override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
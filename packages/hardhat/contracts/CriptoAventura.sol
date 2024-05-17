// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract CriptoAventura is ERC721, ERC721Enumerable {
	uint256 public maxSupply;
	using Strings for uint256;

	struct CertificateInfo {
		string name;
		string dateEnd;
		address student;
		uint8 level;
	}

	mapping(uint256 => CertificateInfo) tokenInfo;

	constructor(uint256 _maxSupply) ERC721("CriptoAventura", "CRAVLA") {
		maxSupply = _maxSupply;
	}

	function mint(
		string memory name,
		string memory dateEnd,
		uint8 level
	) public {
		uint256 counter = totalSupply();
		require(
			counter < maxSupply,
			"No more CriptoAventura Latam certificates available"
		);

		CertificateInfo memory certificateInfo = CertificateInfo(
			name,
			dateEnd,
			msg.sender,
			level
		);
		tokenInfo[counter] = certificateInfo;

		_safeMint(msg.sender, counter);
	}

	function tokenURI(
		uint256 tokenId
	) public view override returns (string memory) {
		require(
			tokenId < totalSupply(),
			"ERC721 Metadata: URI query for nonexistent token"
		);

		CertificateInfo memory certificateInfo = tokenInfo[tokenId];

		string memory jsonURI = string(
			Base64.encode(
				abi.encodePacked(
					'{ "name": "Cripto Aventura LATAM Certificate #',
					tokenId.toString(),
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

		return
			string(abi.encodePacked("data:application/json;base64,", jsonURI));
	}

	// The following functions are overrides required by Solidity.

	function _update(
		address to,
		uint256 tokenId,
		address auth
	) internal override(ERC721, ERC721Enumerable) returns (address) {
		return super._update(to, tokenId, auth);
	}

	function _increaseBalance(
		address account,
		uint128 value
	) internal override(ERC721, ERC721Enumerable) {
		super._increaseBalance(account, value);
	}

	function supportsInterface(
		bytes4 interfaceId
	) public view override(ERC721, ERC721Enumerable) returns (bool) {
		return super.supportsInterface(interfaceId);
	}
}



https://www.kernel.org/pub/software/scm/git/docs/user-manual.html#submodules
https://git-scm.com/book/en/v2/Git-Tools-Submodules


```
## From the repo ROOT


## https://bips.dev/status/
## https://github.com/bitcoin/bips
git submodule add \
                    https://github.com/bitcoin/bips.git \
  ./data-sources/submodules/github.com/bitcoin/bips

## https://github.com/ethereum/EIPs
git submodule add \
                    https://github.com/ethereum/EIPs.git \
  ./data-sources/submodules/github.com/ethereum/EIPs

## https://github.com/satoshilabs/slips/
git submodule add \
                    https://github.com/satoshilabs/slips.git \
  ./data-sources/submodules/github.com/satoshilabs/slips

## https://github.com/Synthetixio/SIPs
git submodule add \
                    https://github.com/Synthetixio/SIPs.git \
  ./data-sources/submodules/github.com/Synthetixio/SIPs

## https://github.com/infinex-xyz/proposals
git submodule add \
                    https://github.com/infinex-xyz/proposals.git \
  ./data-sources/submodules/github.com/infinex-xyz/proposals

## https://github.com/solana-foundation/solana-improvement-documents
git submodule add \
                    https://github.com/solana-foundation/solana-improvement-documents.git \
  ./data-sources/submodules/github.com/solana-foundation/solana-improvement-documents

## https://github.com/ChainAgnostic/CAIPs
## https://standards.chainagnostic.org/
git submodule add \
                    https://github.com/ChainAgnostic/CAIPs.git \
  ./data-sources/submodules/github.com/ChainAgnostic/CAIPs

## https://docs.ens.domains/ensip/
git submodule add \
                    https://github.com/ensdomains/ensips.git \
  ./data-sources/submodules/github.com/ensdomains/ensips


```


update https://stackoverflow.com/questions/8191299/update-a-submodule-to-the-latest-commit

`git submodule update --remote --merge`

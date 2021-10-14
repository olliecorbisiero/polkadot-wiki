module.exports = {
  docs: [
    {
      type: "category",
      label: "Get Started",
      items: [
        "general/kusama/kusama-getting-started",
        "general/kusama/kusama-coc",
        "general/kusama/kusama-claims",
        "learn/learn-balance-transfers",
        "learn/learn-auction",
        "learn/learn-parachains",
        "learn/learn-parathreads",
        "learn/learn-crowdloans",
        "general/ens",
        "general/kusama/kusama-parameters",
        "general/doc-thousand-validators",
        "general/kusama/kusama-timeline",
        "general/kusama/kusama-community",
      ],
    },
    {
      type: "category",
      label: "What to Try",
      items: [
        "learn/learn-governance",
        "learn/learn-identity",
        "learn/learn-registrar",
        "learn/learn-treasury",
        "learn/learn-assets",
        "maintain/kusama/maintain-guides-society-kusama",
        "general/kusama/kusama-social-recovery",
        "maintain/kusama/maintain-guides-how-to-validate-kusama",
        "maintain/maintain-guides-how-to-stop-validating",
        "maintain/kusama/maintain-guides-how-to-nominate-kusama",
        "maintain/doc-maintain-guides-validator-community",
        "general/kusama/kusama-endpoints",
        "general/kusama/kusama-ledger",
        "general/kusama/kusama-statemine-ledger",
      ],
    },
    {
      type: "category",
      label: "What to Build",
      items: [
        "build/build-index",
        {
          type: "category",
          label: "Development Guide",
          items: [
            "build/build-guide",
            "build/build-parachains",
            "build/build-storage",
            "build/build-smart-contracts",
            "build/build-oracle",
            "build/build-data",
            "build/build-wallets",
            "build/build-ss58-registry",
          ],
        },
        {
          type: "category",
          label: "Tools",
          items: ["build/build-tools-index"],
        },
        {
          type: "category",
          label: "Resources",
          items: ["build/build-hackathon"],
        },
      ],
    }, 
    {
      type: "category",
      label: "What to Break",
      items: [
        "maintain/maintain-errors",
        "general/kusama/kusama-bug-bounty",
        "general/kusama/kusama-adversarial-cheatsheet",
      ],
    },
  ],
};

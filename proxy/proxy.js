const express = require('express');
const { Router } = require('express');
const cors = require('cors');
const axios = require("axios");

const app = express();
const proxyRouter = Router();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

proxyRouter.get("/", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

// STANDINGS

proxyRouter.get("/CL/standings", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/CL/standings", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/BL1/standings", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/BL1/standings", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/DED/standings", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/DED/standings", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/PD/standings", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/PD/standings", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/FL1/standings", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/FL1/standings", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/PPL/standings", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/PPL/standings", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/SA/standings", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/SA/standings", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/PL/standings", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/PL/standings", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

// SCORERS

proxyRouter.get("/CL/scorers", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/CL/scorers", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/BL1/scorers", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/BL1/scorers", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/DED/scorers", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/DED/scorers", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/PD/scorers", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/PD/scorers", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/FL1/scorers", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/FL1/scorers", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/PPL/scorers", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/PPL/scorers", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/SA/scorers", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/SA/scorers", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});

proxyRouter.get("/PL/scorers", async (req, res) => {
    try {
    const response = await axios.get("https://api.football-data.org/v4/competitions/PL/scorers", {
      headers: {
        "X-Auth-Token": "3fb9ea01c1e840d0830c9b49066c1d8a"
      }
    });

    res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Proxy error", error: error.message });
    }
});


module.exports = {
    proxyRouter : proxyRouter
}
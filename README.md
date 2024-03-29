[![Build Status](https://travis-ci.com/Greg-Hamel/weatheredstrip.svg?branch=master)](https://travis-ci.com/Greg-Hamel/weatheredstrip)
[![codecov](https://codecov.io/gh/Greg-Hamel/weatheredstrip/branch/master/graph/badge.svg)](https://codecov.io/gh/Greg-Hamel/weatheredstrip) [![Greenkeeper badge](https://badges.greenkeeper.io/Greg-Hamel/weatheredstrip.svg)](https://greenkeeper.io/)

# Weathered-Strip
## Intro
Weathered Strip was created to help gather all required flight planning documentation in one place. It provides NOTAMs, METARs/TAFs and live RVR for each requested airport.

## How it works
Weathered Strip is made of both a client and a server located in `./client` and `./server`, respectively.

### Server
The server receives airport requests and dispatches new requests to the corresponding following services:
1. Nav Canada, for Canadian weather and NOTAMs;
1. Aviation Weather Center (US Gov), for global weather;
1. FAA NOTAM service (US Gov), for global NOTAMs;

Once all requests are resolved, the server responds to the client's request with a single JSON object.

### Client
The client merely dispatches the user's request to the server and, once resolved, display them in the current format.

## Demo
A live app can be accessed at the following link: [Weathered Strip](https://www.weatheredstrip.com)

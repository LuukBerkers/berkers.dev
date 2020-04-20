#!/usr/bin/env node

/**
 * Copyright (C) 2020  Luuk Berkers
 *
 * This file is part of the berkers.dev
 *
 * berkers.dev is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send('Hello, world!');
});

module.exports = app;

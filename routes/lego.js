/**
 * Copyright (C) 2020  Luuk Berkers <berkers.luuk@gmail.com>
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

const spawn = require('child_process').spawn;
const express = require('express');
var createError = require('http-errors');

const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('lego', { title: 'Lego', loc: req.originalUrl.split('/')[1] });
});

router.get('/divisions', function (req, res, next) {
  if (req.query.div == 0) {
    throw createError(400, 'Incorrect request values');
  }

  var accumulator = String();

  var render = (code) => {
    var result;
    try {
      data = JSON.parse(accumulator);
      result = JSON.stringify(data, null, 2);
    } catch (SyntaxError) {
      result = accumulator;
    }

    res.render('lego-divisions', {
      title: 'Lego',
      loc: req.originalUrl.split('/')[1],
      pyOut: result,
    });
  };

  // This python program is free software, licensed under the GPLv3+
  // The source code can be found at https://github.com/LuukBerkers/divide-lego
  const python = spawn('python3', [
    'code/divide-lego/divide.py',
    req.query.set,
    req.query.div,
  ]);

  python.stdout.on('data', (data) => (accumulator += data));
  python.stderr.on('data', (data) => (accumulator += data));
  python.on('close', render);
});

module.exports = router;

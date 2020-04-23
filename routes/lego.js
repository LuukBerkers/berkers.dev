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

var express = require('express');
var router = express.Router();

/* GET LEGO page. */
router.get('/', function (req, res, next) {
  // The regex removes the trailing slash if there is one.
  res.render('lego', {
    title: 'LEGO',
    loc: req.originalUrl.replace(/\/+$/, ''),
  });
});

module.exports = router;

/*
 * commands.js
 *
 * This file is part of citric - Minimalistic IRC library for Node.js
 * © Copyright Massimo Neri 2014 <hello@mneri.me>
 *
 * This library is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this library. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

module.exports = {
    'CAP':     'subcommand ?:params',
    'INVITE':  'nickname channel',
    'JOIN':    'channels ?keys',
    'KICK':    'channels users ?:comment',
    'LIST':    '?channels',
    'MODE':    'nickname modes',
    'MOTD':    'target',
    'NAMES':   '?channels',
    'NOTICE':  'target :text',
    'NICK':    'nickname',
    'PART':    'channels ?:message',
    'PASS':    'password',
    'PONG':    'target',
    'PRIVMSG': 'target :text',
    'QUIT':    '?:message',
    'TOPIC':   'channel ?:topic',
    'USER':    'user mode unused :realname'
};
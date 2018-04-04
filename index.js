import * as functions from 'firebase-functions';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import express from 'express';
import fs from 'fs';

const index = fs.readFileSync(__dirname + '/index.html', 'utf8');
const app = express();

app.get('**', (req, res) => {
  const html = renderToString(<App/>)
  const finalHtml = index.replace('<!-- ::APP:: -->', html);

  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.send(finalHtml);
});

export let ssrApp = functions.https.onRequest(app);

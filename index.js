import * as functions from 'firebase-functions';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import { StaticRouter } from "react-router-dom";
import express from 'express';
import fs from 'fs';

const index = fs.readFileSync(__dirname + '/index.html', 'utf8');
const app = express();

app.get('**', (req, res) => {
  const context = {};

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  )
  const finalHtml = index.replace('<!-- ::APP:: -->', html);

  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');

  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(finalHtml)
    res.end()
  }
});

export let ssrApp = functions.https.onRequest(app);

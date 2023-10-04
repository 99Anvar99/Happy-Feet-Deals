const path = require('path');
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { authMiddleware } = require('./utils/auth');
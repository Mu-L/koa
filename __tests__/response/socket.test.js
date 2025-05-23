'use strict'

const { describe, it } = require('node:test')
const assert = require('node:assert/strict')
const response = require('../../test-helpers/context').response
const Stream = require('stream')

describe('res.socket', () => {
  it('should return the request socket object', () => {
    const res = response()
    assert.strictEqual(res.socket instanceof Stream, true)
  })
})

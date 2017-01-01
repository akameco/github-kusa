import test from 'ava';
import fn from './';

test('throw error', async t => {
	await t.throws(fn(), 'username required');
});

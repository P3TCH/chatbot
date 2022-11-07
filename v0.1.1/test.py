import chatgui
import unittest

class TestReadIntents(unittest.TestCase):
	def test_readdata(self):
		assert chatgui.read_intents is not None

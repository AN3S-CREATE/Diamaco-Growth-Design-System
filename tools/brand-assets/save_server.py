"""Local helper: serves a directory and saves POST bodies to <dir>/<path>. Binds 127.0.0.1 only.
usage: python -I save_server.py <dir> <port>"""
import sys, os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from functools import partial

ROOT = os.path.abspath(sys.argv[1])


class H(SimpleHTTPRequestHandler):
    def do_POST(self):
        name = os.path.basename(self.path.split('?')[0]) or 'out.json'
        n = int(self.headers.get('Content-Length', 0))
        with open(os.path.join(ROOT, name), 'wb') as f:
            f.write(self.rfile.read(n))
        self.send_response(204)
        self.end_headers()

    def log_message(self, *a):
        pass


ThreadingHTTPServer(('127.0.0.1', int(sys.argv[2])), partial(H, directory=ROOT)).serve_forever()

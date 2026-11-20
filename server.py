import http.server
import socketserver
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class NoCacheHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    # Disable 304 Not Modified caching
    def send_error(self, code, message=None, explain=None):
        super().send_error(code, message, explain)

    def do_GET(self):
        # Prevent 304 by stripping conditional headers
        if 'If-Modified-Since' in self.headers:
            del self.headers['If-Modified-Since']
        if 'If-None-Match' in self.headers:
            del self.headers['If-None-Match']
        super().do_GET()

class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == '__main__':
    with ThreadingTCPServer(('0.0.0.0', PORT), NoCacheHTTPHandler) as httpd:
        print(f"Serving HTTP with NO CACHING on 0.0.0.0 port {PORT}...")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass

webpackJsonp([0x7c6d8131fade],{721:function(a,n){a.exports={data:{markdownRemark:{html:'<p>HackerOne supports Single Sign-On (SSO) through Security Assertion Markup Language 2.0 (SAML 2.0) for these providers:</p>\n<ul>\n<li><a href="/programs/google-sso-saml-setup.html">Google</a></li>\n<li><a href="/programs/okta-sso-saml-setup.html">Okta</a></li>\n<li><a href="/programs/onelogin-sso-saml-setup.html">OneLogin</a></li>\n<li><a href="https://support.bitium.com/administration/saml-hackerone/">Bitium</a></li>\n<li>Centrify</li>\n<li>MS ADFS</li>\n<li><a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.hackerone">Azure Active Directory</a></li>\n<li>Ping Identity</li>\n<li><a href="https://duo.com/docs/hackerone">Duo</a></li>\n</ul>\n<p><a href="https://support.hackerone.com/hc/en-us/requests/new">Contact HackerOne</a> if you have another SAML provider.</p>\n<h3>Set Up</h3>\n<p>To configure Single Sign-On via SAML:</p>\n<ol>\n<li>Go to: <strong>Settings > General > Authentication</strong>.</li>\n<li>In the <strong>SAML</strong> section, click <strong>Add SAML settings</strong> to add your provider information.</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-10567.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 41.21763470958712%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA+ElEQVQoz6VS/0oDMQy+1x8Iwp5BxD98Al/AvwQnk7GD204ZOLXrtenu2uv9+LxGem4oODHw0SRNviZpEmstzN5Ak2aQIWitUdc12rZF0zQnIcR675GQNnhebfD2IvC+lRCvBfI8R3jorxJIk63c4HZ5g7WaY6Ue8KQfvwX2ff8rRsL1boHL2Rmu7s9xcTfB9WyK0prhshtbOST9SY4IfdPB1oBzLUpTYU8liqJgSClBRCdVORI6ZzmJhg+pbIX/CBMGsjRNGVmWcWVCCK4u6Eop1vkcbF156NIOm/Bph1jn3BdhnFFsK65BWIE4w+P16Nh36A96zP0AzEFtXSbY93kAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml-1"\n        title=""\n        src="/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-e7ffa.png"\n        srcset="/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-49813.png 125w,\n/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-dc8a5.png 250w,\n/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-e7ffa.png 500w,\n/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-dda24.png 750w,\n/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-c5f18.png 1000w,\n/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-10567.png 1429w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol start="3">\n<li>Enter information for these fields:</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th>Field</th>\n<th>Detail</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Email Domain</td>\n<td>The email domain for users that will be required to use SAML authentication.</td>\n</tr>\n<tr>\n<td>Single Sign On URL</td>\n<td>The URL from your SAML provider to initiate a single sign-on attempt, sometimes called the login URL.</td>\n</tr>\n<tr>\n<td>X509 Certificate</td>\n<td>The certificate from your SAML provider to verify the single sign-on response</td>\n</tr>\n</tbody>\n</table>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-setup-2-9bc14973191a0e6d6a1359d6c92c2954-d8e44.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 90.2439024390244%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAABYlAAAWJQFJUiTwAAACAklEQVQ4y6WUSW/bQAyF9f9/Qe+9BjkE7iXxoShQNIdK8r7bkjfYsLwv8G5GHx0Kbgq0QTLAwww51JtHckbO01NaGo2GlMtlKZVKErRa0mm3pR3GaL8PYRhKv9+XVColTjabldFopI5eryen00k+OnK5nDi+78lgMJAgCGSz2SjhbreT/X7/bmy3WyX0fV+cfD4vq9VKJpOJzOfzROHlcvmvovP5rDgej2pnMhlxPM+TTqejdWzF9YuiSBaLhZJPp1PFbDbTA802H8ogQ2VCiEIcBIDxeJyQLpdLVQ+w1+u1rpnZOxwOfyskb4JpDKo+MiBl0OC4y7k4hUmScrfbVaDUFDLfrm1GqSlPmgJrvV5XdtJHNu2ntvgIMl+hUFDb9ojH5roxXNe9EtZqNQ3gIwPBt8TYb2M4CELucELIBnewWCxqULValUqlojMHseYVYaOQGHyAl4U9HA6VkMO1y9SMGkLQbDa1BNi2ZjZgA4sFNDQh5AQjZBMlt+pYQ0AGrIlhz1TTSBqYEFIDgkiHANJANR/wIX5qByF+qy3ABwlP9w9CiCiw1RFAjEIO4yXZnwW1/F0AmWGPomvKrvfaZe6SfcRMkXk19rMAvAZbv/VdXn9QvhffQ9R9dpSiX/It/CI/f38XJ51OqzLqZR000Kh/gZhWM5Af7qM8PH+V+4c7eQGJhC+hVD6DmAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml-2"\n        title=""\n        src="/static/saml-setup-2-9bc14973191a0e6d6a1359d6c92c2954-e7ffa.png"\n        srcset="/static/saml-setup-2-9bc14973191a0e6d6a1359d6c92c2954-49813.png 125w,\n/static/saml-setup-2-9bc14973191a0e6d6a1359d6c92c2954-dc8a5.png 250w,\n/static/saml-setup-2-9bc14973191a0e6d6a1359d6c92c2954-e7ffa.png 500w,\n/static/saml-setup-2-9bc14973191a0e6d6a1359d6c92c2954-dda24.png 750w,\n/static/saml-setup-2-9bc14973191a0e6d6a1359d6c92c2954-c5f18.png 1000w,\n/static/saml-setup-2-9bc14973191a0e6d6a1359d6c92c2954-d8e44.png 1435w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol start="4">\n<li>Click <strong>Run test</strong>. This will launch a new window that\'ll allow a test login.</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-f7b06.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.76315789473684%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABHklEQVQoz41SyW6DUAzkY/sjvfYneulX9Nh7z0SIhEDgkbCEfQvLNGPpRTRKlT5pZI9tbI+FoZQC3zzPmKbpKVina7W/5sbhcIDneQhUCJXkqOv6Idq2xfl8xna7RVmWwrMsg+M4KIoCTdNIzDBNE5ZlSXCcZozj+CeGYUDXdeJzI80vl8utxqDk0+kk3Z+9ZVl+cUq8zxuUG4YhgiBAmqbo+16magn0aQluordhs2VeUHQpwnKPpFbXra8bbjYb2LaN3W4nt6T0qqrkXhygLcGmSZJIrB962erT+sDb1wvev1/RDCWM4/GIOI5FNn0W86M8z/8lmbG1Fcm+7wsom9x1XeEcwgFEFEW3O+vGD294/4+tub6X9ol1XufW+AF/sLaJO9jHNAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml-3"\n        title=""\n        src="/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-e7ffa.png"\n        srcset="/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-49813.png 125w,\n/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-dc8a5.png 250w,\n/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-e7ffa.png 500w,\n/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-dda24.png 750w,\n/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-c5f18.png 1000w,\n/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-f7b06.png 1368w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol start="5">\n<li>Enter your login credentials to the test window. After your login attempt, the test will either succeed or fail and provide warning messages about your test login in the <strong>Status</strong> section.</li>\n<li>Click the <strong>Run another test</strong> link if your test fails. If your test is successful, request approval of your settings by clicking <strong>Request Verification</strong>.</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-c2e0d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.627737226277375%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABaklEQVQoz6VSS07DMBD10VhzAo7BkjVX4BJsypYFCMEB2BWJRG2Tpk2aD81PjfOxnceM2yIElVgQ6Wk80RvPm+cR6/Ua4zhCa/1vGGMgVnRhsFwi2mwQfZTY7XYn0TQNyrLEYj5HXVVoW7nPFwuKxZ4jGwjHceC6LioiaeqglDoJVtD3A2TbQXY9OjoPwwA9aIwGwAgYTQrDMMSG1LGCv75eafhJhbSSaDoFQze1ipQNtUWvOhp5tUIURWAvt9utVdP3pKDraKz2C5xz05C4WZaiqSWi0sPVwzmuny9weX+Gu7cbiNlsBobneZiTPwzf921M09T6VBSFbVbXNabTKVhEkZfIihgv3gRPzgSP7i3e01eIOI5tIY/N4JxjlmW/RmbP2CLm5HlOOXmrACkBstZ6KXhUJnHk0bl7EAT2X5IktpDBDfjhWDlfeFwTbWhlRr2PBPFzj77nrOj4wnw+5ry35rARhusOYN4nnrStey5phFoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml-4"\n        title=""\n        src="/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-e7ffa.png"\n        srcset="/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-49813.png 125w,\n/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-dc8a5.png 250w,\n/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-e7ffa.png 500w,\n/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-dda24.png 750w,\n/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-c5f18.png 1000w,\n/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-c2e0d.png 1370w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol start="8">\n<li>HackerOne will review and verify your SAML settings and notify you within 1 business day after the review is complete.</li>\n<li>After HackerOne approves your request, click the <strong>Migrate Users</strong> button when you\'re ready to enable SAML for all of your users.</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-3f82c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.72058823529412%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABTklEQVQoz4VS20rDQBDNlwn+iX8gfoU/4Hf4qvgg6KsgIhRKmjQXc6G5NUmTJtlsctyZNhC02oHD2WFn53JmtSRJQDaOI4ZhOAuy/3zNdV04joPNZoNtsUNVVSdR1zXSNIVpmiiKgv08z9knnmK05XIJXddRliWklOj7/k90XYdm36AXPQY5sF/VleIWnegYWhAEiKIIbdvinA1KFokDxCjViOOvGB45DEP4vs+tU5dCCK5ORSaQX6puDN+GGTiIygxFk+Pdf8ZH+II37wnuVj+MvFqtYBgG83q9hmVZrA11nmUZg/QrlXaB5yNQxetij6/UwM3jJW5fr3D9cIH7xR00ekTBcRxzgokpyU9r2gbUAN2TtaKBlS4YZvKJZBdCs20bnufxpiemDkkK+lIESk6FaItzG09pOG2WeH6etkp6zs/01+axvVT38sjK/wYvV67Zik5+GwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml-5"\n        title=""\n        src="/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-e7ffa.png"\n        srcset="/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-49813.png 125w,\n/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-dc8a5.png 250w,\n/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-e7ffa.png 500w,\n/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-dda24.png 750w,\n/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-c5f18.png 1000w,\n/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-3f82c.png 1360w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p><i>Note: Your program must be launched and not in sandbox mode to set up SAML.</i></p>\n</blockquote>\n<h3>Additional Information</h3>\n<p>Here are some screenshots that provide additional details on Service Provider and Attribute mapping:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-5c594.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 49.58775029446408%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/0lEQVQoz22R6w6DIAyFff+nNFFAQAZeuIj+2KFM3JKdmIbafvRCt23bNE1CCE5ijHvvD1JKqdp2aG5Vt+87SOBEjsMwrOsagt9veVI9wMYYj1tdCGHWM3CttbXWGKOVFlxoPVfhz8uYWRehzLIsOecHxi8UdM6d53ldFwZBJ7DhFmpSL6Vybf6BMTNuBVkDBRaCMYYbYcdxRALqt4I/MFLRGWKAYdECAbKMQELO8U8FZpxb59BwhdGclNJa17aKnO89/cCc3gnzwD9zlovzKV00RVUm/Yf7vmffsDFwtVIIgcS2lFIYoVwTy/fA7fVKqCoE7Ixe+yO4NYeCId56AywsOa/Na7+GAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml1"\n        title=""\n        src="/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-e7ffa.png"\n        srcset="/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-49813.png 125w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-dc8a5.png 250w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-e7ffa.png 500w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-dda24.png 750w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-c5f18.png 1000w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-22484.png 1500w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-5c594.png 1698w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-2-5463059e51b73a99c70af98744f6d0dc-9146c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50.59241706161137%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3UlEQVQoz3WRyRaCMAxF+f8vhJ3lMFgoMgnF4sJLgxxBuAsakrwMbdD3fZIkWZ7Hcay1nqbXwnqs53RBMAxDlqHNlbqlafpcGASx+FprX2cEBIwxiMvS1HWNTf/Ul7trXVUVpXE652SEo7htW8I0cZ5xHB8eQvM8sxclsFEeRljETdMURUGS1GZOY8ivKIen6zrsbc+TzgwstQGNdMbgV8TY1nMUk4d4W4nOpUc6U5pbkLlOxG8P68mtwOwRG+dvaCeWwWqP3Nn2sN+nPq66EyuloigKw5DxaHKV+s8HAEg9qKQIbZAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml_2"\n        title=""\n        src="/static/saml-2-5463059e51b73a99c70af98744f6d0dc-e7ffa.png"\n        srcset="/static/saml-2-5463059e51b73a99c70af98744f6d0dc-49813.png 125w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-dc8a5.png 250w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-e7ffa.png 500w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-dda24.png 750w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-c5f18.png 1000w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-22484.png 1500w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-9146c.png 1688w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>',frontmatter:{path:"/programs/single-sign-on-sso-via-saml.html",id:"programs/single-sign-on-sso-via-saml",title:"Single Sign-On (SSO) via SAML",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-single-sign-on-sso-via-saml-html-1a3cebe923089763941f.js.map